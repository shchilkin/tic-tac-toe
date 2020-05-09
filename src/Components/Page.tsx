import React, {useContext} from "react";
import GameContext from "../context/GameContext";

type PageProps = {
    children: React.ReactNode,
}

const Page = ({children}: PageProps) => {

    const {win,isGameOver, winner, playerColorScheme, colorSchemeHandler}: any  = useContext(GameContext);

    console.log('win, winner, scheme, handler',win, winner, playerColorScheme, colorSchemeHandler)

    const backgroundColorHandler = () => {
        let backgroundColor = '#C6D3D0';

        if (winner === 1){
            return colorSchemeHandler(playerColorScheme).playerOneColor;
        }

        if (winner === 2){
            return colorSchemeHandler(playerColorScheme).playerTwoColor;
        }

        if (isGameOver){
            return '#9EA9A6'
        }

        return backgroundColor
    }

    console.log('Handler',colorSchemeHandler(playerColorScheme))

    return (
        <div
            className={'App'}
            style={{
                textAlign: 'center',
                backgroundColor: backgroundColorHandler(),
                height: '100vh',
                display:'flex',
                justifyContent: "center",
                alignItems:'center',}}
        >
            {children}
        </div>
    )
}

export default Page;