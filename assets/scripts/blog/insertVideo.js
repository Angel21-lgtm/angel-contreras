"use strict";

const insertVideo = (container, title, srcVideo, amount) => {

    let fragment = "";

    for(let i = 0; i < amount; i++) {
        fragment +=
            `<article class="video-container flex flex-column align-items-center">

                <video class="video col-w-12" controls>
                    <source src="${srcVideo[i]}" type="video/mp4">
                </video>

                <div class="blog-title-container flex flex-wrap align-items-center col-w-12">
                    <h4 class="col-w-11">
                        ${title[i]}
                    </h4>
                    <button class="go-to-video button-hover">
                        Ir al video
                    </button>
                </div>

                <div class="like col-w-11 flex flex-column">
                    <div class="hand-post-container col-w-12 col-h-12 flex">

                        <div class="like-hand left-like col-w-6 col-h-12 flex">
                            <img class="col-w-6 col-h-12" src="./assets/img/blog/hand.svg" alt="Hand">
                            <span class="counter-like col-w-6 col-h-12 flex justify-center align-items-center">0</span>
                        </div>

                        <div class="like-hand right-like col-w-6 col-h-12 flex">
                            <img class="col-w-6 col-h-12" src="./assets/img/blog/hand.svg" alt="Hand">
                            <span class="counter-dislike col-w-6 col-h-12 flex justify-center align-items-center">0</span>
                        </div>

                    <div>
                </div>

            </article>`;
    }

    return container.innerHTML = fragment;
}

export {
    insertVideo
}