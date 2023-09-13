const SERVER_IP = "http://ec2-54-67-103-210.us-west-1.compute.amazonaws.com/";

export const ENV = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `http://${SERVER_IP}/api/v1`,
  API_ROUTES: {
    USER:'user',
    LOGIN:'login',
    GET_ME:"user/get",
    REFRESH_ACCESS_TOKEN:"auth/refresh_access_token",
    PATIENT:{
      CREATE:"create/patient",
      UPDATE:"patient",
      GET:"patient/patients",
      GETONE:"patient",
      DELETE:"patient"
    },
    INF_PATIENTS:{
      CARDIO:{
        CREATE:'cardio',
        UPDATE:'cardio',
        GET: 'get/cardios',
        GETONE:'get/cardio',
        DELETE:'cardio'
      }
    }

  },
  JWT: {
    ACCESS: "accessToken",
    REFRESH: "refreshToken",
  },
};