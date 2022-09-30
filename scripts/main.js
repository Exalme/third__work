$(function()    {
    $(`.article__img`).hide()
    $(`.article__text`).hide()

    $(`.article__img__2`).hide()
    $(`.article__text__2`).hide()

    $(`.article__img__3`).hide()
    $(`.article__text__3`).hide()


    document.querySelector(`#more`).onclick    =   function()  {
        $(`.article__img`).slideDown(1000);
        $(`.article__text`).slideDown(1000);
        $(`.articles`).css(`margin-bottom`, `200px`);

        $(`.article__more`).wrap(`<img src=icons/minus.png id=minus>`)
        $(`.article__more`).remove()
    }

    document.querySelector(`#more__2`).onclick    =   function()  {
        $(`.article__img__2`).slideDown(1000);
        $(`.article__text__2`).slideDown(1000);
        $(`.articles__2`).css(`margin-bottom`, `200px`);

        $(`.article__more__2`).wrap(`<img src=icons/minus.png id=minus__2>`)
        $(`.article__more__2`).remove()
    }

    document.querySelector(`#more__3`).onclick    =   function()  {
        $(`.article__img__3`).slideDown(1000);
        $(`.article__text__3`).slideDown(1000);
        $(`.articles__3`).css(`margin-bottom`, `200px`);

        $(`.article__more__3`).wrap(`<img src=icons/minus.png id=minus__3>`)
        $(`.article__more__3`).remove()
    }
})
