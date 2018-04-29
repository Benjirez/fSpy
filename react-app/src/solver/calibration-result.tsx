import Transform from "./transform";
import Point2D from "./point-2d";

export interface CameraParametersBase {
  cameraTransform:Transform
}

export interface CameraParameters1VP extends CameraParametersBase {
  vanishingPoint:Point2D
}

export interface CameraParameters2VP extends CameraParametersBase {
  vanishingPoints:[Point2D, Point2D] | [Point2D, Point2D, Point2D]
  relativeFocalLength:number
  computedPrincipalPoint:Point2D | null
}

interface CalibrationResultBase {
  errors:string[]
  warnings:string[]
}

export interface CalibrationResult1VP extends CalibrationResultBase {
  cameraParameters:CameraParameters1VP | null
}

export interface CalibrationResult2VP extends CalibrationResultBase {
  cameraParameters:CameraParameters2VP | null
}