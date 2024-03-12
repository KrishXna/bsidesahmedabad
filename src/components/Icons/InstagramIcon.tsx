import React from "react";

type Props = {
    color?: string;
};

export const InstagramIcon = ({ color = "white" }: Props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.3075 9.42201C11.7415 9.42201 11.1883 9.58983 10.7177 9.90426C10.2471 10.2187 9.88034 10.6656 9.66375 11.1885C9.44717 11.7114 9.3905 12.2867 9.50092 12.8418C9.61133 13.3969 9.88386 13.9067 10.2841 14.3069C10.6842 14.7071 11.1941 14.9797 11.7492 15.0901C12.3043 15.2005 12.8796 15.1438 13.4025 14.9272C13.9254 14.7107 14.3723 14.3439 14.6867 13.8733C15.0012 13.4027 15.169 12.8495 15.169 12.2835C15.169 11.9078 15.095 11.5357 14.9512 11.1885C14.8074 10.8413 14.5966 10.5258 14.3309 10.2601C14.0652 9.99441 13.7497 9.78363 13.4025 9.63983C13.0553 9.49602 12.6832 9.42201 12.3075 9.42201ZM23.7651 6.5951C23.759 5.70405 23.595 4.82115 23.2805 3.98741C23.0489 3.37733 22.6906 2.82329 22.2291 2.36186C21.7677 1.90043 21.2137 1.5421 20.6036 1.3105C19.7699 0.996036 18.8869 0.831956 17.9959 0.825886C16.5074 0.745117 16.069 0.745117 12.3075 0.745117C8.54594 0.745117 8.10748 0.745117 6.61902 0.825886C5.72798 0.831956 4.84507 0.996036 4.01134 1.3105C3.40126 1.5421 2.84722 1.90043 2.38579 2.36186C1.92436 2.82329 1.56602 3.37733 1.33443 3.98741C1.01996 4.82115 0.855882 5.70405 0.849812 6.5951C0.769043 8.08355 0.769043 8.52201 0.769043 12.2835C0.769043 16.0451 0.769043 16.4835 0.849812 17.972C0.862232 18.8662 1.02609 19.7518 1.33443 20.5912C1.565 21.1985 1.92303 21.7493 2.38442 22.2066C2.84387 22.6708 3.3991 23.0291 4.01134 23.2566C4.84507 23.571 5.72798 23.7351 6.61902 23.7412C8.10748 23.822 8.54594 23.822 12.3075 23.822C16.069 23.822 16.5074 23.822 17.9959 23.7412C18.8869 23.7351 19.7699 23.571 20.6036 23.2566C21.2158 23.0291 21.771 22.6708 22.2305 22.2066C22.6919 21.7493 23.0499 21.1985 23.2805 20.5912C23.5947 19.7534 23.7587 18.8667 23.7651 17.972C23.8459 16.4835 23.8459 16.0451 23.8459 12.2835C23.8459 8.52201 23.8459 8.08355 23.7651 6.5951ZM20.8344 15.8258C20.7973 16.5379 20.6454 17.2392 20.3844 17.9027C20.1604 18.4562 19.8274 18.959 19.4051 19.3812C18.9829 19.8034 18.4802 20.1364 17.9267 20.3604C17.2569 20.6069 16.5516 20.7433 15.8382 20.7643C14.9267 20.7643 14.6844 20.7643 12.3075 20.7643C9.93055 20.7643 9.68824 20.7643 8.7767 20.7643C8.06332 20.7433 7.35804 20.6069 6.68825 20.3604C6.11607 20.1478 5.59934 19.8086 5.17672 19.3681C4.75864 18.9542 4.43577 18.4541 4.23057 17.9027C3.98314 17.2337 3.8505 16.5276 3.83826 15.8143C3.83826 14.9028 3.83826 14.6604 3.83826 12.2835C3.83826 9.90662 3.83826 9.66431 3.83826 8.75278C3.8505 8.0395 3.98314 7.33342 4.23057 6.66433C4.4432 6.09214 4.78242 5.57542 5.22287 5.15279C5.63864 4.73698 6.13817 4.41444 6.68825 4.20664C7.35804 3.96019 8.06332 3.82381 8.7767 3.8028C9.68824 3.8028 9.93055 3.8028 12.3075 3.8028C14.6844 3.8028 14.9267 3.8028 15.8382 3.8028C16.5516 3.82381 17.2569 3.96019 17.9267 4.20664C18.4989 4.41927 19.0156 4.7585 19.4382 5.19895C19.8563 5.61289 20.1792 6.11294 20.3844 6.66433C20.6308 7.33412 20.7672 8.03939 20.7882 8.75278C20.7882 9.66431 20.7882 9.90662 20.7882 12.2835C20.7882 14.6604 20.869 14.9028 20.8344 15.8143V15.8258ZM18.9882 7.24125C18.8508 6.86854 18.6342 6.53007 18.3533 6.24919C18.0725 5.96831 17.734 5.75171 17.3613 5.61433C16.8495 5.43694 16.3105 5.35101 15.769 5.36048C14.869 5.36048 14.6151 5.36048 12.3075 5.36048C9.99978 5.36048 9.74593 5.36048 8.84594 5.36048C8.30163 5.3658 7.76256 5.46737 7.25363 5.66048C6.88663 5.79163 6.55174 5.99938 6.27123 6.26994C5.99073 6.54051 5.77102 6.86768 5.62672 7.22971C5.45915 7.74359 5.37729 8.28154 5.38441 8.82201C5.38441 9.72201 5.38441 9.97585 5.38441 12.2835C5.38441 14.5912 5.38441 14.8451 5.38441 15.7451C5.39585 16.2887 5.49722 16.8268 5.68441 17.3374C5.82179 17.7101 6.03839 18.0485 6.31927 18.3294C6.60015 18.6103 6.93862 18.8269 7.31133 18.9643C7.80363 19.1453 8.32169 19.2466 8.84594 19.2643C9.74593 19.2643 9.99978 19.2643 12.3075 19.2643C14.6151 19.2643 14.869 19.2643 15.769 19.2643C16.3133 19.259 16.8524 19.1574 17.3613 18.9643C17.734 18.8269 18.0725 18.6103 18.3533 18.3294C18.6342 18.0485 18.8508 17.7101 18.9882 17.3374C19.1813 16.8284 19.2829 16.2894 19.2882 15.7451C19.2882 14.8451 19.2882 14.5912 19.2882 12.2835C19.2882 9.97585 19.2882 9.72201 19.2882 8.82201C19.2885 8.27716 19.1868 7.73708 18.9882 7.22971V7.24125ZM12.3075 16.6912C11.7292 16.6912 11.1566 16.5771 10.6225 16.3555C10.0883 16.1338 9.60321 15.809 9.19484 15.3995C8.78647 14.9901 8.46289 14.5041 8.24264 13.9694C8.0224 13.4347 7.90981 12.8618 7.91132 12.2835C7.91133 11.4113 8.17013 10.5587 8.65496 9.83357C9.13979 9.10848 9.82886 8.54355 10.6349 8.21028C11.441 7.87702 12.3278 7.79041 13.1831 7.96142C14.0385 8.13242 14.8238 8.55336 15.4398 9.17094C16.0557 9.78852 16.4746 10.575 16.6434 11.4307C16.8122 12.2865 16.7232 13.1731 16.3878 13.9783C16.0525 14.7835 15.4857 15.4711 14.7594 15.954C14.033 16.4369 13.1797 16.6935 12.3075 16.6912ZM16.9228 8.74124C16.6678 8.71424 16.4317 8.5938 16.2602 8.40313C16.0886 8.21246 15.9937 7.96504 15.9937 7.70855C15.9937 7.45206 16.0886 7.20465 16.2602 7.01397C16.4317 6.8233 16.6678 6.70286 16.9228 6.67586C17.1779 6.70286 17.4139 6.8233 17.5855 7.01397C17.7571 7.20465 17.852 7.45206 17.852 7.70855C17.852 7.96504 17.7571 8.21246 17.5855 8.40313C17.4139 8.5938 17.1779 8.71424 16.9228 8.74124Z"
                fill={color}
            />
        </svg>
    );
};

export default InstagramIcon;
