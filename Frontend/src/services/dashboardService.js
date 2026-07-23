import API from "./authService";
import { getMyDonorProfile } from "./donorService";

export const getDashboardData = async () => {
  const donorResponse = await getMyDonorProfile();

  const requestResponse = await API.get("/request/my");

  return {
    donor: donorResponse.donor,
    requests: requestResponse.data.requests || [],
  };
};