import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.saga.js";
import { userSagas } from "./user/user.saga.js";
import { cartSagas } from "./cart/cart.saga.js";

export default function* rootSaga() {
	yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
