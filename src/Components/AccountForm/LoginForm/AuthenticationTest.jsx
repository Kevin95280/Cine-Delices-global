import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
    } from "react";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const AuthContext = createContext();