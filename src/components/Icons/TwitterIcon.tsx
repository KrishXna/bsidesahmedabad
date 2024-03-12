import React from "react";

type Props = {
    color?: string;
    className?: string;
};

export const TwitterIcon = ({ color = "white", className }: Props) => {
    return (
        <div className={className}>
            <svg width="18" height="18" viewBox="0 0 210 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.510984 0L81.5876 108.318L0 196.385H18.3635L89.795 119.279L147.507 196.385H209.995L124.355 81.976L200.297 0H181.933L116.151 71.0112L62.9985 0H0.510984ZM27.5154 13.5142H56.2218L182.987 182.871H154.281L27.5154 13.5142Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default TwitterIcon;
