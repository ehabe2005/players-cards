import Players from "./Players"
import PlayerCard from "./Card";


const PlayersMap = () => {
    return (
        <div className="div-PlayersMap">
            {Players.map(player => (
                <PlayerCard key={player.Name} {...player} />
            ))}
        </div>
    );
};
          export default PlayersMap 