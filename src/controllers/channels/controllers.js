import { StatusCodes } from "http-status-codes";
import { Channel } from "../../models";

export async function addChannel(request, response, next) {
  try {
    const channel = await Channel.create(request.body);
    response.status(StatusCodes.CREATED).json({
      data: channel,
      status: StatusCodes.CREATED,
      success: true
    })
  } catch (error) {
    next(error);
  }
}


export async function getChannels(request, response, next) {
  try {
    const channels = await Channel.findAll();
    response.status(StatusCodes.OK).json({
      data: channels,
      status: StatusCodes.OK,
      success: true
    })
  } catch (error) {
    next(error);
  }
}
