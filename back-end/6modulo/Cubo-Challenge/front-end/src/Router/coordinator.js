

export const goToPage = (navigate, pageIndex) => {    
    navigate(pageIndex); 
}

export const goToHomePage = (navigate) => {
    navigate('/home');
}

export const goBack = (navigate) => {
    navigate(-1);
}
