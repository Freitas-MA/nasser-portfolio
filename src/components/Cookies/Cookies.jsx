import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components'

const StyledCookies = styled.div`
    .cookie-banner {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        background: #a00000eb;
        border-radius: 25px;
        color: #fff;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;

        & button {
            background: #fff;
            border: none;
            color: #a00000eb;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        .cookie-banner {
            width: 90%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const Cookies = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('cookieAccepted'))
            ?.split('=')[1];
        if (cookieValue === 'true') {
            setShowBanner(false);
        } else {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        document.cookie = "cookieAccepted=true; max-age=31536000"; // 1 year
        setShowBanner(false);
    };

    return (
        <StyledCookies>
            {showBanner && (
                <div className="cookie-banner">
                    <p>We use cookies to improve your experience on our site.</p>
                    <button onClick={handleAccept}>Accept</button>
                </div>
            )}
        </StyledCookies>
    );
};

export default Cookies;
