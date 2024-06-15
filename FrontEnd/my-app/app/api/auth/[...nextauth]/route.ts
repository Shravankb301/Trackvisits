import authOptions from './options'; // Update the path accordingly
import NextAuth from 'next-auth';

authOptions.secret = process.env.SECRET;

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
