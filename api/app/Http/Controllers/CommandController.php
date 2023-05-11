<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommandController extends Controller
{
    //
    public function createCommand(Request $request){

        $validate = Validator::make($request->all(), [
            'platform' => 'required',
            'operating_system' => 'required',
            'command' => 'required',
            'description' => 'required'
        ]);

        if($validate->fails()){
            
        }

    }
}
