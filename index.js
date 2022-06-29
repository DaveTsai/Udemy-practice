/*Please add a type:module into package.json file */


import { franc } from 'franc';
import langs from 'langs';
import pkg from 'colors';


const input = franc(process.argv[2])

if (input === `und`) {
    console.log("too short".red)
}
else {
    const lan = langs.where("3", input)
    console.log(lan.name.green)

}
