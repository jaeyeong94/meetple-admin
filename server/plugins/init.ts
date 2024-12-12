import '~/server/lib/pg';

export default defineNitroPlugin(async (nitroApp) => {
  console.log('NODE_ENV', process.env.NODE_ENV);
  console.log('Database Name', process.env.DATABASE_NAME);
  console.log('Database plugin loaded');
});
