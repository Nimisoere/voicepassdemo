const hostname = "http://www.voicepass.us/Auth/";
const apiVersion = "v2";
const apiName = "Verification";
let localhostname

const baseUrl = `${hostname}/api/${Verification}`;
export const apiUrls = {
  createProfile: `${baseUrl}/${apiVersion}/Create`,
  deleteProfile: `${baseUrl}/Delete`,
  enrollUser: `${baseUrl}/${apiVersion}/Enroll"`,
  getEnrollmentStatus: `${baseUrl}/GetEnrollmentStatus`,
  reset: `${baseUrl}/Reset`,
  getVerificationStatus: `${baseUrl}/GetVerificationStatus`,
  verify: `${baseUrl}/${apiVersion}/Verify`
};
