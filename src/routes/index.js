import { StatusCodes } from 'http-status-codes';
import { errorHandler } from '../utils/errorHandler';
import Subscriptions from '../controllers/subscriptions';
import Channels from '../controllers/channels';

export default (app) => {
  const apiVersion = `/api/v1`;
  app.get(`${apiVersion}`, (req, res) => {
    res.status(200).json({
      message: "Welcome to admin service for fuudstore",
    });
  });

  app.use(`${apiVersion}/subscriptions`, Subscriptions);
  app.use(`${apiVersion}/channels`, Channels);
  // app.use(`${apiVersion}/products`, Products);
  // app.use(`${apiVersion}/upload`, FileUpload);
  app.use(`${apiVersion}/healthz`, (req,res)=>res.status(200).json({message : "Active"}));

  app.use("*", (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({
      message: 'We do not support this route at the moment. Maybe later? :-)'
    });
  });

  app.use((err, req, res, next) => {
    errorHandler(err, res)
  });
};
