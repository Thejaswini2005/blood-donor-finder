import API from "./authService";

export const createRequest = async (requestData) => {
  const { data } = await API.post("/request", requestData);
  return data;
};

export const getMyRequests = async () => {
  const { data } = await API.get("/request/my");
  return data;
};
export const getDonorRequests = async () => {
  const { data } = await API.get("/request/donor");
  return data;
};
export const getAllRequests = async () => {
  const { data } = await API.get("/request");
  return data;
};

export const updateRequestStatus = async (id, status) => {
  const { data } = await API.put(`/request/${id}/status`, {
    status,
  });

  return data;
};

export const deleteRequest = async (id) => {
  const { data } = await API.delete(`/request/${id}`);
  return data;
};