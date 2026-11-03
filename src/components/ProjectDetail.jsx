import DetailModal from "./DetailModal";

const ProjectDetail = ({ project, onClose, item }) => {
  return <DetailModal item={item || project} onClose={onClose} />;
};

export default ProjectDetail;
