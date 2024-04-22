import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Post, PostRelations} from '../models';

export class PostRepository extends DefaultCrudRepository<
  Post,
  typeof Post.prototype.id,
  PostRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Post, dataSource);
  }
}
