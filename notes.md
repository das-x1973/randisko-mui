tree -I 'node_modules|.next'

rm -rf .next node_modules package-lock.json
npm install -g yarn                     
yarn

yarn build  yarn start

yarn dev
yarn lint
yarn test


npm install


Prisma:
npx prisma migrate dev --name add_image_table
npx prisma generate

npx prisma studio


Git:
restore deleted dir 'app/api/uzivatel', but only before commited:
git checkout -- app/api/uzivatel 

middleware.ts  :
import { NextRequest, NextResponse } from "next/server"
export { default } from "next-auth/middleware"

// export function middleware(req: NextRequest) {
//   return NextResponse.redirect(new URL('/new', request.url));
// }

// export const config = { matcher: ["/dashboard"] }


tcpipTCpip1973@

