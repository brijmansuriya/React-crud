<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use App\Models\User;
class UserController extends Controller
{
    use ResponseTrait;
    public function index()
    {
        try {
            $data = User::get();
            return $this->responseSuccess($data, 'User Get Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        try {
            $product = User::create($request->all());
            return $this->responseSuccess($product, 'New User Created Successfully !');
        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        return response()->json(User::whereId($id)->first());
    }

    public function update(Request $request, $id)
    {
        $user = User::whereId($id)->first();
        $user->update([
            'name'=>$request->name,
            'email'=>$request->email,
        ]);
        return $this->responseSuccess( 'New User Update Successfully !');
    }

    public function destroy($id)
    {
       
        try {
            $user = User::whereId($id)->first()->delete();
            return $this->responseSuccess('User Delete Successfully !');
        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
        
    }
}
