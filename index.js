const { rejects } = require('assert')
const fs = require('fs/promises')
const { resolve } = require('path')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.appendFile(fileName,fileContent,(err)=>{
			if(err){
				reject("error");
			}
			resolve();
		})
		resolve(console.log("New file is created!"));
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.readFile(fileName,(err)=>{
			if(err){
				reject(err);
			}
			resolve();
		})
		resolve(console.log(fileName));
	})
}



const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.appendFile(fileName,fileContent,(err)=>{
			if(err){
				reject(err);
			}
			resolve();
		})
		resolve(console.log(fileContent));
	})
}


const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.unlink(fileName,(err)=>{
			if(err){
				reject(err);
			}
			resolve();
		})
		resolve(console.log(`${fileName} is deleted`));
	})
}
myFileWriter('File.txt',"Hello");
myFileReader('File.txt');
myFileUpdater('File.txt',' World!');
myFileDeleter('File.txt');


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }