"use strict";
class user {
    constructor(firtsName, lastName, username, email, password, cpf, contact, isAdmin) {
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contact = contact;
        this.isAdmin = isAdmin;
    }
    getfirtsName() {
        return this.firtsName;
    }
    getlastName() {
        return this.lastName;
    }
    username() {
        return this.username;
    }
    email() {
        return this.email;
    }
    password() {
        return this.password;
    }
    cpf() {
        return this.cpf;
    }
    contact() {
        return this.contact;
    }
    isAdmin() {
        return this.isAdmin;
    }
}
