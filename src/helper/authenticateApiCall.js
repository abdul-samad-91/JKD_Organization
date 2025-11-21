
export async function apiCall(axiosInstance, dispatch, router, toast, setView) {
  try {
    const response = await axiosInstance.get('/api/me');
    // console.log(response.data.user);
    // dispatch({type:'SET_EMAIL',payload:response.data.user.email});
    // dispatch({type:'SET_ROLE',payload:response.data.user.role});
    response.status === 200 && setView(true);
  } catch (error) {
    if (error.status === 401) {
      router.push('/login');
      toast.error('Unauthorized login again');
    }
  }
}