<?php

namespace App\Http\Controllers;

use App\Command;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CommandController extends Controller
{
    //
    public function createCommand(Request $request)
    {

        try {

            $validate = Validator::make($request->all(), [
                'platform' => 'required',
                'operating_system' => 'required',
                'command' => 'required',
                'description' => 'required'
            ]);

            if ($validate->fails()) {
                return response()->json([
                    'errors' => $validate->errors()
                ], 422);
            }

            $command = Command::create($request->all());

            if (!$command) {
                return response()->json([
                    'success' => false,
                    'message' => 'Error creating command'
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Command created successfully',
                'command' => $command->get()->first()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Internal server error'
            ]);
        }

    }

    public function updateCommand(Request $request)
    {
        try {

            $commandId = $request->route()->parameter('command_id');
            $command = DB::table('commands')->where('id', $commandId);

            if ($command->count() <= 0) {
                return response()->json([
                    'success' => false,
                    'message' => 'Command not found, please try again'
                ]);
            }
            $command->update($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Command updated successfully',
                'command' => $command->first()
            ]);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Internal server error'
            ]);
        }
    }

    public function deleteCommand(Request $request)
    {
        try {

            $commandId = $request->route()->parameter('command_id');

            $command = DB::table('commands')->where('id', $commandId);

            if($command->count() <= 0){
                return response()->json([
                    'success' => false,
                    'message' => 'Error deleting command, please try again'
                ]);
            }

            $command->delete();

            return response()->json([
                'success' => true,
                'message' => 'Command deleted successfully',
            ]);


        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Internal server error'
            ]);
        }
    }

    public function getAllCommands()
    {
        try {

            $commands = Command::all();

            return response()->json([
                'success' => true,
                'commands' => $commands
            ]);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Internal server error'
            ]);
        }
    }
}
