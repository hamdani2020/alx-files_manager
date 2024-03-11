import mongodb from 'mongodb';
import Collection from 'mongodb/lib/collection';
import envLoader from './env_loader';
// eslint-diable-next-line no-unused-vars


/**
 * It represents the Mongodb client.
 */

class DBClient {
  /**
   * It creates the new DBClient instance
   */
  constructor() {
    envLoader();
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const dbURL = `mongodb://${host}:${port}/${database}`;
    
    this.client = new mongodb.MongoClient(dbURL, { useUnifiedTopology: true});
    this.client.connect();
  }

  /**
   * It checks whether the client's connection to the DB is active.
   */
  isAlive() {
    return this.client.isConnected();
  }

  /**
   * It gets the number of users in the database
   */
  async ubUsers() {
    return this.client.db().collection('users').countDocuments();
  }

  /**
   * It gets the number of files in the database
   */
  async nbFiles() {
    return this.client.db().collection('files').countDocuments();
  }

  /**
   * It gets the reference to the users collection
   */
  async usersCollection() {
    return this.client.db().collection('users');
  }

  /**
   * It gets the reference to the files colleciton
   */
  async filesCollection() {
    return this.client.db().collection('files');
  }
}

export const dbClient = new DBClient();
export default dbClient;
