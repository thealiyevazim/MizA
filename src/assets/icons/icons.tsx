import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function HomeIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 .25A.75.75 0 00.25 1v7c0 .414.336.75.75.75h7A.75.75 0 008.75 8V1A.75.75 0 008 .25H1zm.75 7v-5.5h5.5v5.5h-5.5zM12 .25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75h7a.75.75 0 00.75-.75V1A.75.75 0 0019 .25h-7zm.75 7v-5.5h5.5v5.5h-5.5zM11.25 12a.75.75 0 01.75-.75h7a.75.75 0 01.75.75v7a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75v-7zm1.5.75v5.5h5.5v-5.5h-5.5zM1 11.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75h7a.75.75 0 00.75-.75v-7a.75.75 0 00-.75-.75H1zm.75 7v-5.5h5.5v5.5h-5.5z"
        fill={props?.fill}
      />
    </Svg>
  );
}

export function PlayerIcon(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={18}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7 .5c.48 0 .869.366.869.816v15.368c0 .45-.39.816-.869.816-.48 0-.869-.366-.869-.816V1.316c0-.45.39-.816.869-.816zM13.131 5.302c.48 0 .869.366.869.817v5.762c0 .451-.389.817-.869.817s-.868-.366-.868-.817V6.12c0-.451.389-.817.868-.817zM1.737 6.119c0-.451-.389-.817-.868-.817-.48 0-.869.366-.869.817v5.762c0 .451.389.817.869.817s.868-.366.868-.817V6.12z"
        fill={props?.fill}
      />
    </Svg>
  );
}

export function PauseIcon(props: SvgProps) {
  return (
    <Svg
      width={33}
      height={42}
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 1a1 1 0 00-2 0v12a1 1 0 102 0V1zM10 1a1 1 0 10-2 0v12a1 1 0 102 0V1z"
        fill={props?.fill}
      />
    </Svg>
  );
}

export function PlayIcon(props: SvgProps) {
  return (
    <Svg
      width={33}
      height={42}
      viewBox="0 0 33 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.5 6.353C.5 3.109.5 1.488 1.544.919c1.044-.568 2.406.313 5.129 2.075L29.31 17.642c2.339 1.513 3.509 2.27 3.509 3.358s-1.17 1.845-3.51 3.358L6.674 39.006c-2.723 1.762-4.085 2.643-5.129 2.075C.5 40.512.5 38.89.5 35.647V6.353z"
        fill={props?.fill}
      />
    </Svg>
  );
}

export function NextTrackIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.969.414A.75.75 0 00.75 1v16a.75.75 0 001.219.586l10-8a.75.75 0 000-1.172l-10-8zM10.299 9L2.25 15.44V2.56L10.3 9zM16.25 2a.75.75 0 00-1.5 0v14a.75.75 0 001.5 0V2z"
        fill={props?.fill}
        fillOpacity={0.5}
      />
      <Path
        d="M2.25 15.44L10.3 9 2.25 2.56v12.88z"
        fill={props?.fill}
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export function PreviousTrackIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.25 1a.75.75 0 00-1.219-.586l-10 8a.75.75 0 000 1.172l10 8A.75.75 0 0016.25 17V1zm-1.5 14.44L6.7 9l8.05-6.44v12.88zM2.25 2a.75.75 0 00-1.5 0v14a.75.75 0 001.5 0V2z"
        fill={props?.fill}
        fillOpacity={0.5}
      />
      <Path
        d="M6.7 9l8.05 6.44V2.56L6.7 9z"
        fill={props?.fill}
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export function BackIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={18}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.53.47a.75.75 0 010 1.06L2.06 9l7.47 7.47a.75.75 0 11-1.06 1.06l-8-8a.75.75 0 010-1.06l8-8a.75.75 0 011.06 0z"
        fill={props?.fill}
      />
    </Svg>
  );
}

export function RefreshIcon(props: SvgProps) {
  return (
    <Svg
      width={25}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      enableBackground="new 0 0 512 512"
      {...props}>
      <Path
        d="M262.4 439.427c.227-.303.462-.6.673-.915.203-.304.379-.619.565-.93.171-.286.35-.565.508-.86.17-.317.313-.643.466-.967.145-.308.299-.61.43-.925.13-.314.235-.635.349-.953.122-.338.251-.672.356-1.018.096-.318.167-.642.248-.964.089-.353.188-.701.259-1.061.074-.372.117-.748.171-1.122.045-.314.105-.622.136-.941.138-1.4.138-2.81 0-4.21-.031-.318-.091-.627-.136-.941-.054-.375-.097-.75-.171-1.122-.071-.359-.17-.708-.259-1.061-.081-.322-.152-.645-.248-.964-.105-.346-.234-.68-.356-1.018-.114-.318-.219-.639-.349-.953-.131-.315-.284-.618-.43-.925-.153-.324-.296-.65-.466-.967-.158-.294-.337-.574-.508-.86-.186-.311-.362-.627-.565-.93-.211-.315-.446-.612-.673-.915-.19-.254-.366-.514-.569-.761-.443-.54-.91-1.059-1.403-1.552l-.01-.011-64-64c-8.331-8.331-21.839-8.331-30.17 0-8.331 8.331-8.331 21.839 0 30.17l27.582 27.582H160c-35.386 0-64-28.614-64-64V128c23.558 0 42.667-19.109 42.667-42.667V42.667C138.667 19.109 119.558 0 96 0H53.333C29.775 0 10.667 19.109 10.667 42.667v42.667c0 23.558 19.109 42.667 42.667 42.667v213.333C53.333 400.283 101.05 448 160 448h33.83l-27.582 27.582c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l64-64 .01-.011c.493-.494.96-1.012 1.403-1.552.203-.247.379-.508.569-.762zM53.333 42.667H96v42.667H53.333V42.667zM437.333 384h-42.667C371.109 384 352 403.109 352 426.667v42.667C352 492.891 371.109 512 394.667 512h42.667C460.891 512 480 492.891 480 469.333v-42.667C480 403.109 460.891 384 437.333 384zm0 85.333h-42.667v-42.667h42.667v42.667zM495.085 240.915c-8.331-8.331-21.839-8.331-30.17 0l-27.582 27.582V128C460.891 128 480 108.891 480 85.333V42.667C480 19.109 460.891 0 437.333 0h-42.667C371.109 0 352 19.109 352 42.667v42.667C352 108.891 371.109 128 394.667 128v140.497l-27.582-27.582c-8.331-8.331-21.839-8.331-30.17 0s-8.331 21.839 0 30.17l64 64 .023.021c.49.488 1.004.952 1.54 1.392.248.204.509.38.764.571.302.226.598.461.913.671.304.204.62.38.932.566.285.17.564.349.857.506.318.17.646.315.971.468.306.145.607.297.921.428.315.13.637.236.957.35.337.121.669.25 1.013.354.32.097.646.168.969.249.351.089.698.187 1.055.258.375.074.753.118 1.13.173.311.044.617.104.933.135 1.4.138 2.811.138 4.211 0 .315-.031.621-.09.933-.135.377-.054.756-.098 1.13-.173.358-.071.704-.169 1.055-.258.324-.081.649-.152.969-.249.344-.104.677-.233 1.013-.354.32-.115.642-.22.957-.35.314-.13.615-.283.921-.428.325-.153.653-.297.971-.468.293-.157.572-.336.857-.506.312-.186.628-.363.932-.566.315-.211.611-.445.913-.671.255-.191.516-.368.764-.571.535-.439 1.05-.903 1.54-1.392l.023-.021 64-64c8.334-8.331 8.334-21.839.003-30.17zM394.667 42.667h42.667v42.667h-42.667V42.667z"
        fill={props?.fill}
      />
    </Svg>
  );
}
