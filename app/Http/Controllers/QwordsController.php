<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QwordsController extends Controller
{
    public function index()
    {
        return view('layouts2/index', [
            'section'                 => 'Qwords ',
        ]);
    }
}
