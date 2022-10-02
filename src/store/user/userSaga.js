import { all, call, takeLatest, put } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './userTypes';
import {
  signInSuccess,
  signInFail,
  signOutFail,
  signOutSucces,
  signUpFail,
  signUpSuccess,
} from './userAction';
import {
  getCurrentUser,
  createUserAuthDoc,
  signInWithGoooglePopup,
  signInWithGoogleRedirect,
  signInWithEmailAndPass,
  signOutCurrentUser,
  createAuthUserWithEmailAndPass,
} from '../../utils/firebase/firebase';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userSnapshop = yield call(createUserAuthDoc, userAuth);
    yield put(signInSuccess({ id: userSnapshop.id, ...userSnapshop.data() }));
  } catch (error) {
    yield call(signInFail(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield call(signInFail(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGoooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield call(signInFail, error);
  }
}

export function* signInWithGoogleRedirectGen() {
  try {
    const { user } = yield call(signInWithGoogleRedirect);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield call(signInFail, error);
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithEmailAndPass, { email, password });
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield call(signInFail(error));
  }
}

export function* signOutCurrentUserGen() {
  try {
    yield call(signOutCurrentUser);
    yield put(signOutSucces());
  } catch (error) {
    yield call(signOutFail, error);
  }
}

export function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutCurrentUserGen);
}

export function* signInAfterSignUp({ payload: { user } }) {
  yield call(getSnapshotFromUserAuth, user);
}

export function* onSignUpSucces() { 
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPass, {
      email,
      password,
    });    
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStartRedirect() {
  yield takeLatest(
    USER_ACTION_TYPES.GOOGLE_SIGN_IN_REDIRECT_START,
    signInWithGoogleRedirectGen
  );
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onGoogleSignInStartRedirect),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSucces),
    call(onSignOut),
  ]); //continue while finish here
}
