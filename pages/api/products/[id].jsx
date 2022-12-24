// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";
import axios from 'axios'


export default async function handler(req, res) {
        dbConnect();
        const {
            method,
            query :{ id },
        } = req;
        if (method === "GET") {
            try {
              const product = await Product.findById(id);
              res.status(200).json(product);
            } catch (err) {
              res.status(500).json(err);
              console.log(err);
            }
          }
        if(method === "PUT") {
            try{
                const product = await Product.create(req.body);
                res.status(201).json(product);
            }
            catch(err) {
                res.status(500).json(err);
            }
        }
        if(method === "DELETE") {
            try{
                const product = await Product.create(req.body);
                res.status(201).json(product);
            }
            catch(err) {
                res.status(500).json(err);
            }
        }
}
  