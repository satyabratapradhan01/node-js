// env.js
import { config } from 'dotenv';
import { z } from 'zod';

config(); // Load environment variables

const portSchema = z.coerce.number().min(1).max(65535).default(3000);
export const port = portSchema.parse(process.env.PORT); // Make sure your env key is uppercase
