var ObjectID = require('mongodb').ObjectID;

module.exports = function(app,db){
       /*
        * API ETABLISSEMENTS : GET
        */
  app.get('/api/getEtablissements',function(req,res){
    db.collection('etablissements').find().toArray(function(err,result){
      if(err){
        res.status(500).send('Une erreur s\'est produite');
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(result);
      }
    })
  })
        /*
         * API ETABLISSEMENT : ADD
         */
        .post('/api/addEtablissement',function(req,res){
            db.collection('etablissements').insert(req.body , function(err,result){
                if(err){
                    res.status(500).send('Une erreur s\'est produite');
                }else{
                    res.status(200).send(result.ops[0]);
                }
            })
        })
        /*
         * API ETABLISSEMENT : GET
         */
        .get('/api/getEtablissement/:id',function(req,res){
            const id = req.params.id;
            const _ObjectId = {'_id': new ObjectID(id)};
            db.collection('etablissements').findOne(_ObjectId, function(err,result){
                if(err){
                    res.status(500).send('Une erreur s\'est produite');
                }else{
                    res.status(200).send(result);
                }
            })
        })
        /*
     * API ETABLISSEMENT : DELETE
     */
        .delete('/api/deleteEtablissement/:id',function(req,res){
            const id = req.params.id;
            const _ObjectId = {'_id': new ObjectID(id)};
            db.collection('etablissements').remove(_ObjectId, function(err,result){
                if(err){
                    res.status(500).send('Une erreur s\'est produite');
                }else{
                    res.header("Content-Type", "text/html; charset=utf-8");
                    res.status(200).send("L'établissement :" + id + "a été supprimé.");
                }
            })
        })
};
