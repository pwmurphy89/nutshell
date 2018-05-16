/* 
    module to build an html representation of a task
    Authors: Riley Mathews
*/

const $ = require("jquery")
const activateArticleCardButtons = require("./articleCardEventHandlers")

const buildArticleElement = (title, summary, url, id, userID) => {
    const output = $("#Articles__output")
    const articleElement = $(`<div id="Article__card__${id}" class="Article__card"></div>`)
    articleElement.append(
        `
            <h4 class="Article__card__title">${title}</h4>
            <p class="Task__card__summary">Summary: ${summary}</p>
            <p class="Article__card__URL">URL: ${summary}</p>
        `
    )
    const UserManager = require("../registration/UserManager")
    const loggedInUser = UserManager.currentUser()
    if (userID === loggedInUser) {
        articleElement.append(
            `<div id="Article__card__${id}__buttons">
                <button id="Edit__Article__${id}">edit</button>
                <button id="Delete__Article__${id}">delete</button>
            </div>`
        )
    } else {
        articleElement.addClass("friend-article")
    }
    output.append(articleElement)
    activateArticleCardButtons(id)
    
}


module.exports = buildArticleElement