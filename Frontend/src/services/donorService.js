import API from "./authService";

// Create Donor Profile
export const createDonor = async (donorData) => {
  const { data } = await API.post("/donor", donorData);
  return data;
};

// Get All Donors
export const getDonors = async () => {
  const { data } = await API.get("/donor");
  return data;
};

// Search Donors
export const searchDonors = async (params) => {
  const { data } = await API.get("/donor/search", {
    params,
  });

  return data;
};

// Get Logged-in Donor Profile
export const getMyDonorProfile = async () => {
  const { data } = await API.get("/donor/my-profile");
  return data;
};

// Update Donor Profile
export const updateDonor = async (donorData) => {
  const { data } = await API.put(
    "/donor/update",
    donorData
  );

  return data;
};

// Delete Donor Profile
export const deleteDonor = async () => {
  const { data } = await API.delete("/donor/delete");
  return data;
};