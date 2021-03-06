import { GameValues, GameValue } from '../types/common';

export const STRUCTURE_SIZES: Record<GameValue['type'], number> = {
   GarageCar: 0x40,
   Player: 0x18c,
   Weapon: 0x1c,
   StuntJump: 0x44,
   PickUp: 0x20,
   dword: 4,
   word: 2,
   byte: 1,
   char: 1,
   float: 4,
   int: 3,
};

export const GARAGE_CAR_STRUCTURE: GameValues = [
   {
      type: 'word',
      address: 0x12,
      name: 'modelID',
   },
   {
      type: 'byte',
      arrayLength: 3,
      address: 0x32,
      name: 'color',
   },
   {
      type: 'float',
      arrayLength: 3,
      address: 0x00,
      name: 'coordinates',
   },
];

export const PICK_UP_STRUCTURE: GameValues = [
   {
      type: 'word',
      address: 0x18,
      name: 'object',
   },
   {
      type: 'word',
      arrayLength: 3,
      name: 'coordinates',
      address: 0x10,
   },
   {
      type: 'byte',
      name: 'type',
      address: 0x1c,
   },
   {
      type: 'byte',
      name: 'availability',
      address: 0x1d,
   },
];

export const STUNT_JUMP_STRUCTURE: GameValues = [
   {
      type: 'float',
      arrayLength: 3,
      address: 0x00,
      name: 'startZone1',
   },
   {
      type: 'float',
      arrayLength: 3,
      address: 0x0c,
      name: 'startZone2',
   },
   {
      type: 'float',
      arrayLength: 3,
      address: 0x18,
      name: 'landZone1',
   },
   {
      type: 'float',
      arrayLength: 3,
      address: 0x24,
      name: 'landZone2',
   },
   {
      type: 'float',
      arrayLength: 3,
      address: 0x30,
      name: 'cameraCoordinates',
   },
   {
      type: 'byte',
      address: 0x40,
      name: 'isJumpDone',
   },
   {
      type: 'byte',
      address: 0x41,
      name: 'isJumpFound',
   },
];

export const PLAYER_STRUCTURE: GameValues = [
   {
      type: 'Weapon',
      arrayLength: 13,
      address: 0x0024,
      name: 'weapons',
   },
];

export const WEAPON_STRUCTURE: GameValues = [
   {
      type: 'dword',
      address: 0x00,
      name: 'type',
   },
   {
      type: 'dword',
      address: 0x0c,
      name: 'ammo',
   },
];
