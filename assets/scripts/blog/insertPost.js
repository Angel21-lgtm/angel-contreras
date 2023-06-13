"use strict";

const insertPost = (container, img, title, link, hashtag, amount) => {

    let fragment = "";

    for(let i = 0; i < amount; i++) {
        fragment += 
            `<article class="post col-w-10">
                <div class="pots-img-container col-w-12">
                    <img class="col-w-12" src="${img[i]}" alt="Post">
                </div>
                <div class="post-text flex flex-column align-items-center">
                    <h4 class="col-w-12">
                        ${title[i]}
                    </h4>
                    
                    <div class="col-w-12 hashtag-container flex">
                        <a href="${link[i]}" target="" class="hashtag-container-a col-h-12">
                            ${hashtag[i]}
                        </a>
                    </div>

                    <div class="like-post col-w-12 flex">
                        <div class="like-hand left-like-post col-w-3 col-h-12">
                            <img class="col-w-12 col-h-12" src="./assets/img/blog/hand.svg" alt="Hand">
                        </div>
                        <div class="like-hand right-like-post col-w-3 col-h-12">
                            <img class="col-w-12 col-h-12" src="./assets/img/blog/hand.svg" alt="Hand">
                        </div>

                        <div class="count-like-post col-w-5 flex justify-space-around align-items-center">
                            <span class="like-post flex justify-center align-items-center">0</span>
                            <span class="dislike-post flex justify-center align-items-center">0</span>
                        </div>
                    </div>
                </div>
            </article>`;
    }

    return container.innerHTML = fragment;
}

export {
    insertPost
}