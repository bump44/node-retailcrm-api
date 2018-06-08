import { METHODS } from '../../constants';

const list = (filter = {}, page = 1, limit = 20) => ({
  uri: 'tasks',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const create = (task = {}) => ({
  uri: 'tasks/create',
  method: METHODS.POST,
  body: {
    task: JSON.stringify(task),
  },
});

const fetch = (task) => ({
  uri: `tasks/${task}`,
  method: METHODS.GET,
});

const update = (task = {}) => ({
  uri: `tasks/${task.id}/edit`,
  method: METHODS.POST,
  body: {
    task: JSON.stringify(task),
  },
});

export default {
  list,
  create,
  fetch,
  update,
};
