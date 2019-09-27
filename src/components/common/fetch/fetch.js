export const fetchRequest = (url, option, functionStartRequest, functionRespons) => {
    return dispatch => {
        dispatch(functionStartRequest());
      
        if (url === "fake") {
            setTimeout(() => {
                dispatch(functionRespons(Math.random() > 0.2));
            }, 2000)
        } else {
            fetch(url, option)
                .then(response => {
                    if (response.status < 200 && response.status >= 300) {
                        throw new Error(response.status);
                    }
                    return response;
                })
                .then(response => response.json())
                .catch(error => ({ error: "error" }))
                .then(response => {
                    dispatch(functionRespons(response))
                })
        }
    };
}