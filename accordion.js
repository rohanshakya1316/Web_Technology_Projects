// const faqs = document.querySelectorAll('.faq');

// faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('active');
//     });
// });



// accordion.js
document.addEventListener('DOMContentLoaded', () => {  //Ensures that the script runs after the DOM is fully loaded.
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const question = faq.querySelector('.question');

        question.addEventListener('click', () => {
            // Toggle the 'active' class on the faq element
            faq.classList.toggle('active');

            // Get the answer element within the clicked faq
           // const answer = faq.querySelector('.answer');

            // Adjust the max-height based on the presence of the 'active' class
            // if (faq.classList.contains('active')) {
            //     answer.style.maxHeight = answer.scrollHeight + "px";
            // } else {
            //     answer.style.maxHeight = null;
            // }
        });
    });
});
