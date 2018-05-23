import { combineReducers } from "redux";
import { alert } from "./alert.reducers";
import { createProfile } from "./create.reducers";
import { deleteProfile } from "./delete.reducers";
import { enrollment } from "./enroll.reducers";
import { enrollmentStatus } from "./enrollstatus.reducers";
import { resetProfile } from "./reset.reducers";
import { transaction } from "./transaction.reducers";
import { verifyTransaction } from "./verifytransaction.reducers";

export default combineReducers({
    alert,
    createProfile,
    deleteProfile,
    enrollment,
    enrollmentStatus,
    resetProfile,
    transaction,
    verifyTransaction
});