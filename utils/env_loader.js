import { existsSync, readFileSync } from 'fs';

/**
 * It loads the environment variables for an event
 */
const envLoader = () => {
  const env = process.env.npm_lifecycle_event || 'dev';
  const path = env.includes('test') || env.includes('cover') ? '.env.test' : '.env';
  
  if (existsSync(path)) {
    const Data = readFileSync(path, 'utf-8').trim().split('\n');
    
    for (const line of data) {
      const delimitedPosition = line.indexOf('=');
      const variable = line.substring(0, delimitedPosition);
      const value = line.substring(delimitedPosition + 1);
      process.env[variable] = value;
    }
  }
};

export default envLoader;
