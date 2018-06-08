import TasksV5Actions from '../../../src/Actions/V5/Tasks';
import { METHODS } from '../../../src/constants';

describe('Actions - V5 - Tasks', () => {
  it('list', () => {
    const pay = [{}, 1, 20];
    const result = TasksV5Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('tasks');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('list defaults', () => {
    const pay = [];
    const result = TasksV5Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('tasks');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('create', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = TasksV5Actions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('tasks/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ task: JSON.stringify(pay[0]) });
  });

  it('create defaults', () => {
    const pay = [];
    const result = TasksV5Actions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('tasks/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ task: JSON.stringify({}) });
  });

  it('fetch', () => {
    const pay = [123];
    const result = TasksV5Actions.fetch(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('tasks/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('update', () => {
    const pay = [{ id: '123' }];
    const result = TasksV5Actions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('tasks/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ task: JSON.stringify(pay[0]) });
  });

  it('update defaults', () => {
    const pay = [];
    const result = TasksV5Actions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('tasks/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ task: JSON.stringify({}) });
  });
});
