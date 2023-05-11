<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Command extends Model
{
    //
    protected $fillable = ['platform', 'operating_system', 'command', 'description'];
}
