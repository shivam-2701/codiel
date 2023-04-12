const queue = require('../config/kue');

const commentsMailer = require('../mailers/comments_mailer');

queue.process('emails',(job,done)=>{
    console.log("Emails worker is processing a job",job.data);

    commentsMailer.newComment(job.data);
    done();
});