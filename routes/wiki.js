const express= require("express");
const router= express.Router();

const { Page, page } = require("../models");
const { addPage } = require("../views");

router.post('/', async (req, res) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  const makeSlug = page.addHook('beforeValidate', title => {
    page.slug = title.replace(/\s+/g, '_').replace(/\W/g, '');
})


  try {
    const Page = await page.create({
      title: res.json(req.body.title),
      content: res.json(req.body.content),
      slug: makeSlug(title)
    });



    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { throw(error) }
});

router.get('/', (req, res, next) =>{
    res.send('got to GET /wiki/');
});

router.get('/add', (req, res, next) =>{
    res.send(addPage());
});

module.exports=router;
