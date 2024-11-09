

const SignUp = ({ children , Title,subTitle}) => {
  return(
    <div
      className="w-full h-screen bg-cover bg-center flex flex-row justify-center items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(/signup.jpg)',
      }}
    >
        <div className="w-[70%] h-[60%] flex flex-col sm:flex-row py-4 px-10">
            <div className="mt-10 w-full sm:w-[50%] sm:h-full flex flex-col justify-start items-start">
                <h2 className="text-4xl sm:text-5xl  sm:w-20 text-wrap text-gray-50 font-semibold leading-tight font-poppins">{Title}</h2>
                <p className="hidden sm:block mt-5 font-thin font-poppins text-gray-50">{subTitle}</p>
                <div className="hidden mt-10 sm:flex space-x-5">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-gray-100">
                        <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.496v-9.284h-3.131v-3.622h3.131V8.235c0-3.118 1.847-4.844 4.689-4.844 1.369 0 2.84.25 2.84.25v3.146h-2.429c-1.951 0-2.557 1.219-2.557 2.47v2.932h4.405l-1.248 3.622h-3.157V24h6.557c.73 0 1.325-.595 1.325-1.325V1.325c0-.73-.595-1.325-1.325-1.325z"/>
                        </svg>
                    </a>

                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-gray-100">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22.688c-5.892 0-10.688-4.796-10.688-10.688 0-5.892 4.796-10.688 10.688-10.688 5.892 0 10.688 4.796 10.688 10.688 0 5.892-4.796 10.688-10.688 10.688zm0-17.94c-3.911 0-7.088 3.177-7.088 7.088 0 3.911 3.177 7.088 7.088 7.088 3.911 0 7.088-3.177 7.088-7.088 0-3.911-3.177-7.088-7.088-7.088zm0 11.584c-2.462 0-4.597-2.136-4.597-4.596 0-2.462 2.136-4.597 4.597-4.597 2.462 0 4.597 2.136 4.597 4.597 0 2.46-2.135 4.596-4.597 4.596zm5.073-5.623c0 .858-.695 1.553-1.553 1.553-.858 0-1.553-.695-1.553-1.553 0-.858.695-1.553 1.553-1.553.858 0 1.553.695 1.553 1.553z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="mt-4 w-full sm:w-[50%] sm:h-full">
                {children}
            </div>
        </div>
    
   </div>
  );
}

export default SignUp;