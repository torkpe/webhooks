import { StatusCodes } from "http-status-codes";
import axios from 'axios';
import { Channel, Subscription  } from "../../models";
import { EntryExistError, EntryNotFound } from "../../utils/exceptions";

export async function subscribe(request, response, next) {
  try {
    const channel = await Channel.findOne({
      where: {
        id: request.params.id
      }
    });

    if (!channel) {
      throw new EntryNotFound('Could not find this channel');
    }

    const hasSubscribed = await Subscription.findOne({
      where: {
        url: request.body.url
      }
    });

    if (hasSubscribed) {
      throw new EntryExistError('You have already been subscribed to this channel');
    }

    request.body.channelId = request.params.id;

    const subscription = await Subscription.create(request.body);

    return response.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      success: true,
      data: {
        url: subscription.url,
        topic: channel.topic
      }
    });

  } catch (error) {
    next(error);
  }
}

export async function publish(request, response, next) {
  try {
    const channel = Channel.findOne({
      where: {
        id: request.params.id
      }
    });

    if (!channel) {
      throw new EntryNotFound('Could not find this channel');
    }

    const subscriptions = await Subscription.findAll({
      where: {
        channelId: request.params.id
      }
    });

    subscriptions.map(async (subscription) => axios({
      method: 'POST',
      url: subscription.url,
      data: {
        data: request.body.data,
        topic: subscription.topic
      }
    }))

    return response.status(StatusCodes.CREATED).json({
      status: StatusCodes.OK,
      success: true,
      message: 'Successfully published request'
    });

  } catch (error) {
    next(error);
  }
}

