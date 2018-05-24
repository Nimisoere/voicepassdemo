const hostname = "https://www.voicepass.us/Auth";
const apiVersion = "v2";
const apiName = "Verification";
const baseUrl = `${hostname}/api/${apiName}`;
export const apiUrls = {
  createProfile: `${baseUrl}/${apiVersion}/Create`,
  deleteProfile: `${baseUrl}/Delete`,
  enrollUser: `${baseUrl}/${apiVersion}/Enroll`,
  getEnrollmentStatus: `${baseUrl}/GetEnrollmentStatus`,
  resetProfile: `${baseUrl}/Reset`,
  verifyTransaction: `${baseUrl}/GetVerificationStatus`,
  performTransaction: `${baseUrl}/${apiVersion}/Verify`
};
