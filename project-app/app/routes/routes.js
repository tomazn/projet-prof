var ObjectID = require('mongodb').ObjectID;
const multer = require('multer');
const path = require('path');


const pathMatiereLogo = '/uploads/matiere/logo/';
var storageMatiere = multer.diskStorage(
  {
    destination: path.join(__dirname, '../../dist' + pathMatiereLogo),
    filename: function ( req, file, cb ) {
      cb( null, file.originalname);
    }
  }
);

const uploadMatiere = multer({ storage: storageMatiere });

module.exports = function(app,db){

  /*
  *  ################### ETABLISSEMENTS ###################
  * */
       /*
        * API ETABLISSEMENTS : GET
        * return list of all etablissement in json
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
                  res.setHeader('Content-Type', 'application/json');
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

          /*
          *  ################### MATIERE ###################
          * */

        /*
      * API MATIERE : ADD
      */
    .post('/api/addMatiere',uploadMatiere.single('logo'), function(req,res){
      if(!req.file){ res.status(500).send("Aucune image."); return; }
      req.body.logoName = req.file.originalname;
      req.body.logo = pathMatiereLogo + req.file.originalname;
      db.collection('matieres').insert(req.body, function(err,result){
        if(err){
          res.status(500).send("Une erreur s\'est produite");
        }else{
            res.status(200).send(result.ops[0]);
        }
      })
    })

    /*
     * API MATIERE : GET
     */
    .get('/api/getMAtieres',function(req,res){
    db.collection('matieres').find().toArray(function(err,result){
      if(err){
        res.status(500).send("Une erreur s\'est produite");
      }else{
        res.setHeader('Content-Type','application/json');
        res.status(200).send(result);
      }
    })
  })
    /*
       * API MATIERE : DELETE
       */
    .delete('/api/deleteMAtiere/:id',function(req,res){
      const id = req.params.id;
      const _ObjectID = {'_id': new ObjectID(id) }
      db.collection('matieres').remove(_ObjectID, function(err){
        if(err){
          res.status(500).send("Une erreur s\'est produite");
        }else{
          res.header("Content-Type", "text/html; charset=utf-8");
          res.status(200).send("La matiere :" + id + "a été supprimé.");
        }
      })
    })
};
